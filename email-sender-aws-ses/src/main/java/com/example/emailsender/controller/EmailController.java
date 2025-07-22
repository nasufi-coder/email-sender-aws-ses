package com.example.emailsender.controller;

import com.example.emailsender.dto.EmailRequest;
import com.example.emailsender.dto.EmailResponse;
import com.example.emailsender.service.EmailService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@Tag(name = "Email", description = "Email sending operations using AWS SES")
public class EmailController {

    private static final Logger logger = LoggerFactory.getLogger(EmailController.class);

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    @Operation(summary = "Send plain text email", description = "Sends a plain text email using AWS SES")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Email sent successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid email request"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<EmailResponse> sendEmail(@Valid @RequestBody EmailRequest emailRequest) {
        try {
            logger.info("Received request to send email: {}", emailRequest);
            String messageId = emailService.sendEmail(emailRequest);
            return ResponseEntity.ok(EmailResponse.success(messageId));
        } catch (Exception e) {
            logger.error("Error sending email", e);
            return ResponseEntity.internalServerError()
                    .body(EmailResponse.error("Failed to send email: " + e.getMessage()));
        }
    }

    @PostMapping("/send-html")
    @Operation(summary = "Send HTML email", description = "Sends an HTML email using AWS SES")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "HTML email sent successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid email request"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<EmailResponse> sendHtmlEmail(@Valid @RequestBody EmailRequest emailRequest) {
        try {
            logger.info("Received request to send HTML email: {}", emailRequest);
            String messageId = emailService.sendHtmlEmail(emailRequest);
            return ResponseEntity.ok(EmailResponse.success(messageId));
        } catch (Exception e) {
            logger.error("Error sending HTML email", e);
            return ResponseEntity.internalServerError()
                    .body(EmailResponse.error("Failed to send HTML email: " + e.getMessage()));
        }
    }

    @GetMapping("/health")
    @Operation(summary = "Health check", description = "Check if the email service is running")
    @ApiResponse(responseCode = "200", description = "Service is healthy")
    public ResponseEntity<String> healthCheck() {
        return ResponseEntity.ok("Email service is running");
    }
}