pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Pulkit-Kumar-0/my-static-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'npm run export'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'out/**', fingerprint: true
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

}
