package com.musicplayer.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.musicplayer.backend.entities.Tracks;

public interface TracksRepository extends JpaRepository<Tracks, Long> {

}
