package com.musicplayer.backend.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_tracks")
public class Tracks implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "track_id")
	private Long id;
	@Column(name = "track_album")
	private String album;
	@Column(name = "track_autor")
	private String autor;
	@Column(name = "track_valuation")
	private String valuation;
	@Column(name = "track_type")
	private String type;
	@Column(name = "track_style")
	private String style;
	@Column(name = "track_link")
	private String link;
	
	public Tracks() {
		
	}

	public Tracks(Long id, String album, String autor, String valuation, String type, String style,
				  String link) {
		super();
		this.id = id;
		this.album = album;
		this.autor = autor;
		this.valuation = valuation;
		this.type = type;
		this.style = style;
		this.link = link;
	}

	public Long getId() {
		return id;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getValuation() {
		return valuation;
	}

	public void setValuation(String valuation) {
		this.valuation = valuation;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStyle() {
		return style;
	}

	public void setStyle(String style) {
		this.style = style;
	}	

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tracks other = (Tracks) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
		
}
