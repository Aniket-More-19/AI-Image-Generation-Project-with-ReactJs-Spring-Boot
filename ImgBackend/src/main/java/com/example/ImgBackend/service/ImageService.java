package com.example.ImgBackend.service;

import com.example.ImgBackend.model.ImagePrompt;

public interface ImageService {

    public ImagePrompt callToDalle(ImagePrompt prompt);
}
