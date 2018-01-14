package com.oneuse.skillsjournalserver.repository.skill_log;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "skillLogs", path = "skill-log")
public interface SkillLogRepository extends PagingAndSortingRepository<SkillLog, Long> {

    List<SkillLog> findBySkillId(@Param("skill") Long skillId);
}
