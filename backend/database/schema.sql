create table image (
  id INT  primary key auto_increment not null,
  src VARCHAR(255) NOT NULL,
  alt text not null,
  main boolean DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  size int not null
);

create table author (
  id int  primary key auto_increment not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  job_title VARCHAR(255) NOT NULL,
  website VARCHAR(255),
  facebook VARCHAR(255),
  linkedIn VARCHAR(255),
  avatar_id int,
  description LONGTEXT NOT NULL,
  birthday date,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT image_by_author_id_fk FOREIGN KEY (avatar_id) REFERENCES image(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

create table publisher (
  id INT primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  website VARCHAR(255),
  description LONGTEXT NOT NULL,
  logo_id int,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT logo_id_fk FOREIGN KEY (logo_id) REFERENCES image(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

create table article (
  id int  primary key auto_increment not null,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(255) NOT NULL,
  content LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  authors_id INT NOT NULL,
  publishers_id INT NOT NULL,
  CONSTRAINT authors_id_fk FOREIGN KEY (authors_id) REFERENCES author(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT publishers_id_fk FOREIGN KEY (publishers_id) REFERENCES publisher(id) ON DELETE CASCADE ON UPDATE NO ACTION
);



create table image_by_article (
  id INT  primary key auto_increment not null,
  image_id int not null,
  article_id int not null,
  CONSTRAINT image_by_article_id_fk FOREIGN KEY (image_id) REFERENCES image(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT article_with_image_id_fk FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

create table category (
  id INT  primary key auto_increment not null,
  label VARCHAR(255) NOT NULL,
  description LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table category_by_article (
  id INT  primary key auto_increment not null,
  article_id int not null,
  category_id int not null,
  CONSTRAINT category_to_article_id_fk FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT article_to_category_id_fk FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE ON UPDATE NO ACTION
);



create table role (
  id INT  primary key auto_increment not null,
  label VARCHAR(255) NOT NULL
);

create table user (
  id INT  primary key auto_increment not null,
  email VARCHAR(255) NOT NULL,
  password text,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  role_id int not null,
  CONSTRAINT role_id_fk FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

create table profil (
  id INT  primary key auto_increment not null,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  avatar VARCHAR(255) NOT NULL,
  birthday date,
  pseudo int,
  user_id int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION
);



create table vote_type (
  id INT  primary key auto_increment not null,
  label VARCHAR(255) NOT NULL
);


create table vote (
  id int  primary key auto_increment not null,
  article_id int not null,
  user_id int not null,
  type_id int not null,
  CONSTRAINT article_to_vote_id_fk FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT user_to_vote_id_fk FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT type_id_fk FOREIGN KEY (type_id) REFERENCES vote_type(id) ON DELETE CASCADE ON UPDATE NO ACTION
);


create table comment (
  id INT  primary key auto_increment not null,
  text text not null,
  user_id int not null,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_comment_id_fk FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION
);

create table comment_by_article (
  id INT  primary key auto_increment not null,
  article_id int not null,
  comment_id int not null,
  CONSTRAINT comment_to_article_id_fk FOREIGN KEY (article_id) REFERENCES article(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  CONSTRAINT article_to_comment_id_fk FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE ON UPDATE NO ACTION
);


