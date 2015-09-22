package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserPwd.
 * @see com.ems.app.files.EmsUserPwd
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserPwdHome {

	private static final Log log = LogFactory.getLog(EmsUserPwdHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserPwd transientInstance) {
		log.debug("persisting EmsUserPwd instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserPwd persistentInstance) {
		log.debug("removing EmsUserPwd instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserPwd merge(EmsUserPwd detachedInstance) {
		log.debug("merging EmsUserPwd instance");
		try {
			EmsUserPwd result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserPwd findById(Long id) {
		log.debug("getting EmsUserPwd instance with id: " + id);
		try {
			EmsUserPwd instance = entityManager.find(EmsUserPwd.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
