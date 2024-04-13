package com.example.ImgBackend.repository;

import com.example.ImgBackend.model.ImagePrompt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<ImagePrompt, String> {
}
