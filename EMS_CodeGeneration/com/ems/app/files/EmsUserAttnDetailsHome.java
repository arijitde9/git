package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserAttnDetails.
 * @see com.ems.app.files.EmsUserAttnDetails
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserAttnDetailsHome {

	private static final Log log = LogFactory
			.getLog(EmsUserAttnDetailsHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserAttnDetails transientInstance) {
		log.debug("persisting EmsUserAttnDetails instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserAttnDetails persistentInstance) {
		log.debug("removing EmsUserAttnDetails instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserAttnDetails merge(EmsUserAttnDetails detachedInstance) {
		log.debug("merging EmsUserAttnDetails instance");
		try {
			EmsUserAttnDetails result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserAttnDetails findById(Long id) {
		log.debug("getting EmsUserAttnDetails instance with id: " + id);
		try {
			EmsUserAttnDetails instance = entityManager.find(
					EmsUserAttnDetails.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
