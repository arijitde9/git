package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsStateMaster.
 * @see com.ems.app.files.EmsStateMaster
 * @author Hibernate Tools
 */
@Stateless
public class EmsStateMasterHome {

	private static final Log log = LogFactory.getLog(EmsStateMasterHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsStateMaster transientInstance) {
		log.debug("persisting EmsStateMaster instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsStateMaster persistentInstance) {
		log.debug("removing EmsStateMaster instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsStateMaster merge(EmsStateMaster detachedInstance) {
		log.debug("merging EmsStateMaster instance");
		try {
			EmsStateMaster result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsStateMaster findById(Long id) {
		log.debug("getting EmsStateMaster instance with id: " + id);
		try {
			EmsStateMaster instance = entityManager.find(EmsStateMaster.class,
					id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
