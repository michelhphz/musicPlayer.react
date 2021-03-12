CREATE table tb_tracks(
    track_id integer not null primary key,
    track_album varchar(30),
    track_autor varchar(30),
    track_valuation varchar(1),
    track_type varchar(30),
    track_style varchar(30),
    track_link varchar(500)
)