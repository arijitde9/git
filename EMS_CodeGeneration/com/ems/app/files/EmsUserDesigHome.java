package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserDesig.
 * @see com.ems.app.files.EmsUserDesig
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserDesigHome {

	private static final Log log = LogFactory.getLog(EmsUserDesigHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserDesig transientInstance) {
		log.debug("persisting EmsUserDesig instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserDesig persistentInstance) {
		log.debug("removing EmsUserDesig instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserDesig merge(EmsUserDesig detachedInstance) {
		log.debug("merging EmsUserDesig instance");
		try {
			EmsUserDesig result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserDesig findById(Long id) {
		log.debug("getting EmsUserDesig instance with id: " + id);
		try {
			EmsUserDesig instance = entityManager.find(EmsUserDesig.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
