package com.musicplayer.backend.services;

import java.util.List;
import java.util.Optional;

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
	
	@Transactional
	public Tracks findById(Long id) {
		Optional<Tracks> obj = repository.findById(id);
		return obj.get();
	}
	
	@Transactional
	public Tracks insert(Tracks track) {
		Tracks obj = new Tracks(track.getId(), 
							    track.getAlbum(), 
							    track.getAutor(), 
							    track.getValuation(),
							    track.getType(), 
							    track.getStyle(), 
							    track.getLink());
		obj = repository.save(obj);
		return obj;
	}
}
