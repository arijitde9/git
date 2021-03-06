package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserLeaveDetails.
 * @see com.ems.app.files.EmsUserLeaveDetails
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserLeaveDetailsHome {

	private static final Log log = LogFactory
			.getLog(EmsUserLeaveDetailsHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserLeaveDetails transientInstance) {
		log.debug("persisting EmsUserLeaveDetails instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserLeaveDetails persistentInstance) {
		log.debug("removing EmsUserLeaveDetails instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserLeaveDetails merge(EmsUserLeaveDetails detachedInstance) {
		log.debug("merging EmsUserLeaveDetails instance");
		try {
			EmsUserLeaveDetails result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserLeaveDetails findById(Long id) {
		log.debug("getting EmsUserLeaveDetails instance with id: " + id);
		try {
			EmsUserLeaveDetails instance = entityManager.find(
					EmsUserLeaveDetails.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
