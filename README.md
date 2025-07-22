# Email Sender AWS SES

A Spring Boot application for sending emails using Amazon Simple Email Service (SES).

## Features

- Send plain text emails
- Send HTML emails
- RESTful API endpoints
- Input validation
- Comprehensive error handling
- OpenAPI/Swagger documentation
- Configurable AWS SES integration

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher
- AWS SES account (for production use)

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/nasufi-coder/email-sender-aws-ses.git
cd email-sender-aws-ses
```

### 2. Configure AWS SES credentials

Update the following properties in `src/main/resources/application.properties`:

```properties
# Replace with your actual AWS credentials
aws.ses.region=us-east-1
aws.ses.access-key-id=YOUR_ACCESS_KEY_ID
aws.ses.secret-access-key=YOUR_SECRET_ACCESS_KEY
aws.ses.from-email=your-verified-email@example.com
```

**Note**: The current configuration uses mock/example credentials. For production use:
- Replace with your actual AWS credentials
- Ensure your email address is verified in AWS SES
- Consider using IAM roles or environment variables for better security

### 3. Build and run the application

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The application will start on `http://localhost:8080`

## API Endpoints

### Send Plain Text Email
```
POST /api/email/send
Content-Type: application/json

{
    "toEmail": "recipient@example.com",
    "subject": "Test Subject",
    "body": "This is a plain text email body."
}
```

### Send HTML Email
```
POST /api/email/send-html
Content-Type: application/json

{
    "toEmail": "recipient@example.com",
    "subject": "HTML Email Test",
    "body": "<h1>Hello!</h1><p>This is an <strong>HTML</strong> email.</p>"
}
```

### Health Check
```
GET /api/email/health
```

## API Documentation

Once the application is running, you can access the interactive API documentation at:
- Swagger UI: `http://localhost:8080/swagger-ui.html`
- OpenAPI JSON: `http://localhost:8080/api-docs`

## Example Usage

### Using cURL

**Send Plain Text Email:**
```bash
curl -X POST http://localhost:8080/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "toEmail": "test@example.com",
    "subject": "Test Email",
    "body": "This is a test email from the Spring Boot application."
  }'
```

**Send HTML Email:**
```bash
curl -X POST http://localhost:8080/api/email/send-html \
  -H "Content-Type: application/json" \
  -d '{
    "toEmail": "test@example.com",
    "subject": "HTML Test Email",
    "body": "<h1>Welcome!</h1><p>This is an <em>HTML</em> email with <strong>formatting</strong>.</p>"
  }'
```

## Response Format

**Success Response:**
```json
{
    "success": true,
    "message": "Email sent successfully",
    "messageId": "0000014a-f896-4c07-b8b8-example",
    "timestamp": "2023-12-07T10:30:45"
}
```

**Error Response:**
```json
{
    "success": false,
    "message": "Failed to send email: Invalid email address",
    "messageId": null,
    "timestamp": "2023-12-07T10:30:45"
}
```

## Configuration

Key configuration properties in `application.properties`:

```properties
# Server Configuration
server.port=8080

# AWS SES Configuration
aws.ses.region=us-east-1
aws.ses.access-key-id=YOUR_ACCESS_KEY
aws.ses.secret-access-key=YOUR_SECRET_KEY
aws.ses.from-email=your-email@example.com

# Logging Levels
logging.level.com.example.emailsender=DEBUG
```

## AWS SES Setup

1. **Create AWS Account**: Sign up for AWS if you haven't already
2. **Verify Email Address**: In SES console, verify the email address you want to send from
3. **Create IAM User**: Create an IAM user with SES permissions
4. **Get Credentials**: Note down the Access Key ID and Secret Access Key
5. **Configure Application**: Update the credentials in `application.properties`

## Security Notes

- **Never commit real AWS credentials to version control**
- Use environment variables or AWS IAM roles in production
- Consider using AWS Systems Manager Parameter Store or AWS Secrets Manager
- Implement rate limiting for production use
- Add authentication/authorization as needed

## Dependencies

- Spring Boot 3.2.0
- AWS SDK for Java 2.x
- Spring Boot Validation
- SpringDoc OpenAPI

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Support

For issues and questions, please create an issue in the GitHub repository.