package com.musicplayer.backend.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.musicplayer.backend.entities.Tracks;
import com.musicplayer.backend.services.TracksService;

@CrossOrigin(origins = "http://localhost:3000")
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
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Tracks> findById(@PathVariable Long id) {
		Tracks obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@PostMapping
	public ResponseEntity<Tracks> insert(@RequestBody Tracks track) {
		track = service.insert(track);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(track.getId()).toUri();
		return ResponseEntity.created(uri).body(track);
	}
}
