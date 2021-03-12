package com.musicplayer.backend.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.musicplayer.backend.entities.Tracks;
import com.musicplayer.backend.repositories.TracksRepository;

@Service
public class TracksService {
	
	@Autowired
	private TracksRepository repository;
	
	@Transactional
	public List<Tracks> findAll(){
		return repository.findAll();
	}
}
