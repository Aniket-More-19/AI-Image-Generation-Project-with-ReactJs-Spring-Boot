package com.example.ImgBackend.service;

import com.example.ImgBackend.model.ImagePrompt;
import com.example.ImgBackend.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImplement implements ImageService{

    @Autowired
    ImageRepository imageRepository;

    @Override
    public ImagePrompt callToDalle(ImagePrompt prompt) {
        // calling dalle image generation api
        // get the url of the image also----> don't know why yet.
        // System.out.println(prompt);
       return null;
    }
}
