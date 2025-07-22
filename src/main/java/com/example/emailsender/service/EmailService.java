package com.example.emailsender.service;

import com.example.emailsender.dto.EmailRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;

@Service
public class EmailService {

    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private SesClient sesClient;

    @Value("${aws.ses.from-email}")
    private String fromEmail;

    public String sendEmail(EmailRequest emailRequest) {
        try {
            logger.info("Sending email to: {}", emailRequest.getToEmail());

            SendEmailRequest request = SendEmailRequest.builder()
                    .source(fromEmail)
                    .destination(Destination.builder()
                            .toAddresses(emailRequest.getToEmail())
                            .build())
                    .message(Message.builder()
                            .subject(Content.builder()
                                    .charset("UTF-8")
                                    .data(emailRequest.getSubject())
                                    .build())
                            .body(Body.builder()
                                    .text(Content.builder()
                                            .charset("UTF-8")
                                            .data(emailRequest.getBody())
                                            .build())
                                    .build())
                            .build())
                    .build();

            SendEmailResponse response = sesClient.sendEmail(request);
            String messageId = response.messageId();

            logger.info("Email sent successfully with message ID: {}", messageId);
            return messageId;

        } catch (Exception e) {
            logger.error("Error sending email to {}: {}", emailRequest.getToEmail(), e.getMessage(), e);
            throw new RuntimeException("Failed to send email: " + e.getMessage(), e);
        }
    }

    public String sendHtmlEmail(EmailRequest emailRequest) {
        try {
            logger.info("Sending HTML email to: {}", emailRequest.getToEmail());

            SendEmailRequest request = SendEmailRequest.builder()
                    .source(fromEmail)
                    .destination(Destination.builder()
                            .toAddresses(emailRequest.getToEmail())
                            .build())
                    .message(Message.builder()
                            .subject(Content.builder()
                                    .charset("UTF-8")
                                    .data(emailRequest.getSubject())
                                    .build())
                            .body(Body.builder()
                                    .html(Content.builder()
                                            .charset("UTF-8")
                                            .data(emailRequest.getBody())
                                            .build())
                                    .build())
                            .build())
                    .build();

            SendEmailResponse response = sesClient.sendEmail(request);
            String messageId = response.messageId();

            logger.info("HTML email sent successfully with message ID: {}", messageId);
            return messageId;

        } catch (Exception e) {
            logger.error("Error sending HTML email to {}: {}", emailRequest.getToEmail(), e.getMessage(), e);
            throw new RuntimeException("Failed to send HTML email: " + e.getMessage(), e);
        }
    }
}