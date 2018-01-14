package com.oneuse.skillsjournalserver.repository.skill_log;

import com.oneuse.skillsjournalserver.repository.skill.Skill;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
class SkillLog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "skill_id")
    private Skill skill;

    @Column(name = "title")
    private String title;

    @Column(name = "work_day")
    private LocalDate workDay;

    @Column(name = "spent_time_minutes")
    private Integer spentTimeMinutes;

    @Column(name = "logged_text")
    private String text;

    @Column(name = "raw_data")
    private String rawData;

    @Column(name = "created_dt")
    private LocalDateTime createdDateTime;

    public String getSkillReference() {
        return skill.getReference();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getWorkDay() {
        return workDay;
    }

    public void setWorkDay(LocalDate workDay) {
        this.workDay = workDay;
    }

    public Integer getSpentTimeMinutes() {
        return spentTimeMinutes;
    }

    public void setSpentTimeMinutes(Integer spentTimeMinutes) {
        this.spentTimeMinutes = spentTimeMinutes;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
