// eslint-disable-next-line @typescript-eslint/no-require-imports
const enquirer = require("enquirer");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs-extra");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

const TEMPLATE_DIR = "src/components/template/BaseTemplate";
const COMPONENTS_DIR = "src/components/ui";

/**
 * @description 使用模版文件生成新的组件文件
 *
 * 交互式要求用户输入组件名称
 *   - 检查组件名称: 大驼峰命名, 至少两个单词
 * 复制 src/components/template/BaseTemplate 到 src/components/ui/<组件名>
 * 重命名文件: 将 src/components/ui/<组件名>/BaseTemplate.* 重命名为 src/components/ui/<组件名>/<组件名>.*
 * 重命名文件内容: 将 src/components/ui/<组件名>/**.*  中的 BaseTemplate 替换为 <组件名>, (不需要完整匹配, 但是要匹配大小写)
 * 重命名文件内容: 将 src/components/ui/<组件名>/<组件名>.stories.tsx 中的 Template/<组件名> 替换为 UI/<组件名>
 * 关键步骤输出日志
 */
async function generateComponent() {
  const { prompt } = enquirer;
  // 获取组件名称
  const { componentName } = await prompt({
    type: "input",
    name: "componentName",
    message: "请输入组件名称 (大驼峰命名，至少两个单词):",
    validate: (input: string) => {
      if (!/^[A-Z][a-zA-Z]*[A-Z][a-zA-Z]*$/.test(input)) {
        return "组件名称必须是大驼峰命名且至少包含两个单词";
      }
      return true;
    },
  });

  const targetDir = path.join(COMPONENTS_DIR, componentName);

  // 检查目标目录是否已存在
  if (fs.existsSync(targetDir)) {
    console.error(`错误: 组件 ${componentName} 已存在`);
    process.exit(1);
  }

  try {
    // 复制模板目录
    console.log(`📝 正在复制模板目录到 ${targetDir}...`);
    await fs.copy(TEMPLATE_DIR, targetDir);

    // 重命名文件
    console.log("📝 正在重命名文件...");
    const files = await fs.readdir(targetDir);
    for (const file of files) {
      if (file.includes("BaseTemplate")) {
        const newFileName = file.replace("BaseTemplate", componentName);
        await fs.rename(path.join(targetDir, file), path.join(targetDir, newFileName));
        console.log(`  ✓ 已重命名: ${file} -> ${newFileName}`);
      }
    }

    // 更新文件内容
    console.log("📝 正在更新文件内容...");
    const allFiles = await fs.readdir(targetDir);
    for (const file of allFiles) {
      const filePath = path.join(targetDir, file);
      const content = await fs.readFile(filePath, "utf-8");
      let updatedContent = content.replace(/BaseTemplate/g, componentName);

      // 更新 stories.tsx 中的 title: Template/<组件名> => UI/<组件名>
      if (file.endsWith(".stories.tsx")) {
        updatedContent = updatedContent.replace(/Template\//g, `UI/`);
        console.log(`  ✓ 已更新 stories 的 title`);
      }

      await fs.writeFile(filePath, updatedContent);
      console.log(`  ✓ 已更新文件内容: ${file}`);
    }

    console.log(`✅ 成功创建组件 ${componentName}`);
  } catch (error) {
    console.error("生成组件时发生错误:", error);
    process.exit(1);
  }
}

generateComponent().catch(console.error);
