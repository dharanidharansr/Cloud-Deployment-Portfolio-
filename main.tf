provider "aws" {
  region = "eu-north-1"  
}


terraform {
  backend "s3" {
    bucket = "dharanidharan-terraform-state"
    key    = "portfolio/terraform.tfstate"
    region = "eu-north-1"
  }
}

resource "aws_security_group" "instance_sg" {
  name        = "portfolio_sg"
  description = "Security group for Portfolio EC2 instance"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "Portfolio" {
  ami                    = "ami-08eb150f611ca277f"  
  instance_type          = "t3.micro"
  key_name               = "dharanidharan-key"  
  security_groups        = [aws_security_group.instance_sg.name]
  associate_public_ip_address = true

  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install -y docker
              sudo service docker start
              sudo usermod -a -G docker ec2-user
              sudo docker run -d -p 80:80 dharanidharansr/portfolio
              EOF

  tags = {
    Name = "dharanidharan-portfolio"
  }
}

output "public_ip" {
  value = aws_instance.Portfolio.public_ip
}
