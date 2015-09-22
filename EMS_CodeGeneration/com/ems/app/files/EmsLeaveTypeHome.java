package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsLeaveType.
 * @see com.ems.app.files.EmsLeaveType
 * @author Hibernate Tools
 */
@Stateless
public class EmsLeaveTypeHome {

	private static final Log log = LogFactory.getLog(EmsLeaveTypeHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsLeaveType transientInstance) {
		log.debug("persisting EmsLeaveType instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsLeaveType persistentInstance) {
		log.debug("removing EmsLeaveType instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsLeaveType merge(EmsLeaveType detachedInstance) {
		log.debug("merging EmsLeaveType instance");
		try {
			EmsLeaveType result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsLeaveType findById(Long id) {
		log.debug("getting EmsLeaveType instance with id: " + id);
		try {
			EmsLeaveType instance = entityManager.find(EmsLeaveType.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
