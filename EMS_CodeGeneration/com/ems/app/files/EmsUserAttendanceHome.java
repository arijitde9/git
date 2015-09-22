package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserAttendance.
 * @see com.ems.app.files.EmsUserAttendance
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserAttendanceHome {

	private static final Log log = LogFactory
			.getLog(EmsUserAttendanceHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserAttendance transientInstance) {
		log.debug("persisting EmsUserAttendance instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserAttendance persistentInstance) {
		log.debug("removing EmsUserAttendance instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserAttendance merge(EmsUserAttendance detachedInstance) {
		log.debug("merging EmsUserAttendance instance");
		try {
			EmsUserAttendance result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserAttendance findById(Long id) {
		log.debug("getting EmsUserAttendance instance with id: " + id);
		try {
			EmsUserAttendance instance = entityManager.find(
					EmsUserAttendance.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
