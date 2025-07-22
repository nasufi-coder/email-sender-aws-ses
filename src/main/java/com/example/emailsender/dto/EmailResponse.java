package com.example.emailsender.dto;

import java.time.LocalDateTime;

public class EmailResponse {

    private boolean success;
    private String message;
    private String messageId;
    private LocalDateTime timestamp;

    public EmailResponse() {
        this.timestamp = LocalDateTime.now();
    }

    public EmailResponse(boolean success, String message) {
        this();
        this.success = success;
        this.message = message;
    }

    public EmailResponse(boolean success, String message, String messageId) {
        this(success, message);
        this.messageId = messageId;
    }

    public static EmailResponse success(String messageId) {
        return new EmailResponse(true, "Email sent successfully", messageId);
    }

    public static EmailResponse error(String errorMessage) {
        return new EmailResponse(false, errorMessage);
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessageId() {
        return messageId;
    }

    public void setMessageId(String messageId) {
        this.messageId = messageId;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}