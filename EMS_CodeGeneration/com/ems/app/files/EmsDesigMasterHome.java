package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsDesigMaster.
 * @see com.ems.app.files.EmsDesigMaster
 * @author Hibernate Tools
 */
@Stateless
public class EmsDesigMasterHome {

	private static final Log log = LogFactory.getLog(EmsDesigMasterHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsDesigMaster transientInstance) {
		log.debug("persisting EmsDesigMaster instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsDesigMaster persistentInstance) {
		log.debug("removing EmsDesigMaster instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsDesigMaster merge(EmsDesigMaster detachedInstance) {
		log.debug("merging EmsDesigMaster instance");
		try {
			EmsDesigMaster result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsDesigMaster findById(Long id) {
		log.debug("getting EmsDesigMaster instance with id: " + id);
		try {
			EmsDesigMaster instance = entityManager.find(EmsDesigMaster.class,
					id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
