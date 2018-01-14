CREATE TABLE skill_log (
  id BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  reference VARCHAR(64) NOT NULL UNIQUE,
  skill_id BIGINT NOT NULL,
  title TEXT NOT NULL,
  work_day DATE NOT NULL,
  spent_time_minutes INT NOT NULL,
  logged_text TEXT,
  raw_data TEXT,
  created_dt TIMESTAMP NOT NULL,
  FOREIGN KEY (skill_id) REFERENCES skill(id) ON DELETE CASCADE ON UPDATE CASCADE
);
