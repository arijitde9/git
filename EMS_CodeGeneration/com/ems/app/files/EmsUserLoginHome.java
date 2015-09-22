package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserLogin.
 * @see com.ems.app.files.EmsUserLogin
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserLoginHome {

	private static final Log log = LogFactory.getLog(EmsUserLoginHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserLogin transientInstance) {
		log.debug("persisting EmsUserLogin instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserLogin persistentInstance) {
		log.debug("removing EmsUserLogin instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserLogin merge(EmsUserLogin detachedInstance) {
		log.debug("merging EmsUserLogin instance");
		try {
			EmsUserLogin result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserLogin findById(Long id) {
		log.debug("getting EmsUserLogin instance with id: " + id);
		try {
			EmsUserLogin instance = entityManager.find(EmsUserLogin.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
