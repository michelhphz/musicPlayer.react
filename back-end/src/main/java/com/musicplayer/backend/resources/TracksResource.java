package com.musicplayer.backend.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.musicplayer.backend.entities.Tracks;
import com.musicplayer.backend.services.TracksService;

@RestController
@RequestMapping(value = "/tracks")
public class TracksResource {
	
	@Autowired
	private TracksService service;
	
	@GetMapping
	public ResponseEntity<List<Tracks>> findAll() {
		List<Tracks> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
}
