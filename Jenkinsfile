pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],  // Change this if your default branch is different
                    userRemoteConfigs: [[url: 'https://github.com/Pulkit-Kumar-0/my-static-app.git']]
                ]
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // Skip 'npm run export' if not using static export
                
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'out/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Build and deployment completed successfully!'
        }
        failure {
            echo 'Build or deployment failed. Check the logs for details.'
        }
        always {
            cleanWs()
        }
    }
}
