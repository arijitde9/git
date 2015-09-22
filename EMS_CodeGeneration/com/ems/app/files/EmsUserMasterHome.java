package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsUserMaster.
 * @see com.ems.app.files.EmsUserMaster
 * @author Hibernate Tools
 */
@Stateless
public class EmsUserMasterHome {

	private static final Log log = LogFactory.getLog(EmsUserMasterHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsUserMaster transientInstance) {
		log.debug("persisting EmsUserMaster instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsUserMaster persistentInstance) {
		log.debug("removing EmsUserMaster instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsUserMaster merge(EmsUserMaster detachedInstance) {
		log.debug("merging EmsUserMaster instance");
		try {
			EmsUserMaster result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsUserMaster findById(Long id) {
		log.debug("getting EmsUserMaster instance with id: " + id);
		try {
			EmsUserMaster instance = entityManager
					.find(EmsUserMaster.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
