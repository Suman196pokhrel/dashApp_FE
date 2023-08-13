const { execSync } = require('child_process');

const commitMessage = process.argv[2] || 'Default commit message';

try {
    // Build your React application
    console.log('Building React application...');
    execSync('npm run build', { stdio: 'inherit' });

    // Stage changes and commit
    console.log('Staging changes and committing...');
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    // Push changes to remote repository
    console.log('Pushing changes to remote repository...');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('Deployment completed successfully.');
} catch (error) {
    console.error('An error occurred during deployment:', error.message);
}
