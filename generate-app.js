#!/usr/bin/env node

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import ora from 'ora';

if (process.argv.length < 3) {
    console.log('You have to provide a name to your app.');
    console.log('For example :');
    console.log('    npx create-vrap-app my-app');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/unkobweb/create-vrap-app.git";

try {
    fs.mkdirSync(projectPath);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
      console.log(error);
    }
    process.exit(1);
  }

  async function main() {
    try {
      const spinner = ora('Downloading files...').start();

      execSync(`git clone --quiet --depth 1 ${git_repo} ${projectPath}`);
      spinner.succeed('Files downloaded');

      process.chdir(projectPath);

      spinner.start('Installing backend dependencies...');
      execSync('npm install', { cwd: path.join(projectPath, 'backend') });
      spinner.succeed('Backend dependencies installed');

      spinner.start('Installing frontend dependencies...');
      execSync('npm install', { cwd: path.join(projectPath, 'frontend') });
      spinner.succeed('Frontend dependencies installed');

      spinner.start('Cleaning up...');
      execSync('npx rimraf ./.git');
      const filesToDelete = ['generate-app.js', 'package-lock.json', 'package.json'];
      for (const file of filesToDelete) {
        fs.rmSync(path.join(projectPath, file));
      }
      spinner.succeed('Cleaned up');

      spinner.start('Create .env file based on .env.example...');
      fs.copyFileSync(path.join(projectPath, 'backend', '.env.example'), path.join(projectPath, 'backend', '.env'));
      spinner.succeed('.env file created');

      console.log('The installation is done, this is ready to use !');
      console.log('\n\n\t _    ______  ___    ____ ')
      console.log('\t| |  / / __ \\/   |  / __ \\')
      console.log('\t| | / / /_/ / /| | / /_/ /')
      console.log('\t| |/ / _, _/ ___ |/ ____/ ')
      console.log('\t|___/_/ |_/_/  |_/_/      ')
      console.log('\n')
      console.log('   Vite + React + Adonis + PostgreSQL');
      console.log('\n             by Unkobweb\n')
      console.log('Have a nice dev !');
    } catch (error) {
      console.log(error);
    }
}
main();