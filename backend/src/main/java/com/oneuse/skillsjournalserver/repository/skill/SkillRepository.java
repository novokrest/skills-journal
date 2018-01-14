package com.oneuse.skillsjournalserver.repository.skill;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "skills", path = "skill")
public interface SkillRepository extends PagingAndSortingRepository<Skill, Long> {

    Optional<Skill> findByReference(@Param("ref") String reference);

    List<Skill> findByAccountId(@Param("account") Long accountId);
}
