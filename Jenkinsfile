pipeline {
    agent any // Runs on any available Jenkins agent

    // Environment variables (optional, customize as needed)
    environment {
        NODE_VERSION = '18' // Specify Node.js version
    }

    stages {
        // Stage 1: Checkout the code from GitHub
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Pulkit-Kumar-0/my-dynamic-app.git'
            }
        }

        // Stage 2: Set up Node.js environment
        stage('Setup') {
            steps {
                // Install the specified Node.js version
                sh "curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -"
                sh 'apt-get install -y nodejs'
                // Verify Node.js and npm versions
                sh 'node --version'
                sh 'npm --version'
            }
        }

        // Stage 3: Install dependencies
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // Stage 4: Build the Next.js app
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // Stage 5: Run tests (optional, if you add tests later)
        stage('Test') {
            steps {
                // Placeholder for tests; Next.js doesn't include tests by default
                echo 'No tests configured yet. Add npm test script if needed.'
                // Uncomment and adjust if you add a test script in package.json
                // sh 'npm test'
            }
        }

        // Stage 6: Deploy (example for Vercel; customize as needed)
        stage('Deploy') {
            when {
                branch 'main' // Only deploy on main branch
            }
            steps {
                // Install Vercel CLI (if deploying to Vercel)
                sh 'npm install -g vercel'
                // Deploy to Vercel (requires VERCEL_TOKEN set in Jenkins credentials)
                withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                    sh 'vercel --prod --token $VERCEL_TOKEN'
                }
            }
        }
    }

    // Post-build actions
    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check the logs for details.'
        }
        always {
            // Clean up workspace (optional)
            cleanWs()
        }
    }
}