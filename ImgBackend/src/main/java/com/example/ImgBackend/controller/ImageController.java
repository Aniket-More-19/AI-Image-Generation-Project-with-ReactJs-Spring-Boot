package com.example.ImgBackend.controller;

import com.example.ImgBackend.model.ImagePrompt;
import com.example.ImgBackend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageController {
    @Autowired
    ImageService imageService;

    @PostMapping("/generateImage")
    public ImagePrompt generateImage(@RequestBody ImagePrompt prompt){
        return imageService.callToDalle(prompt);
    }
}
