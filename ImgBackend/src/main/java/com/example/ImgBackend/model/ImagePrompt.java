package com.example.ImgBackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "ImagesTable")
public class ImagePrompt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int imgID;
    private String prompt;
    private String imageURL;

    // getter and setter for prompt
    public String getPrompt(){
        return prompt;
    }
    public void setPrompt(String prompt){
        this.prompt = prompt;
    }

    // getter and setter for imageURL
    public String getImageURL(){
        return imageURL;
    }
    public void setImageURL(String imageURL){
        this.imageURL = imageURL;
    }
}
