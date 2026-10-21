pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/adinpandit/ccd_cca_2.git'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t cloud-app .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker stop cloud-app || true
                    docker rm cloud-app || true
                    docker run -d --name cloud-app \
                        -p 5000:5173 cloud-app
                '''
            }
        }
    }
}