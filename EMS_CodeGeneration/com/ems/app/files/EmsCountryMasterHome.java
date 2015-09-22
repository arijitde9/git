package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsCountryMaster.
 * @see com.ems.app.files.EmsCountryMaster
 * @author Hibernate Tools
 */
@Stateless
public class EmsCountryMasterHome {

	private static final Log log = LogFactory
			.getLog(EmsCountryMasterHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsCountryMaster transientInstance) {
		log.debug("persisting EmsCountryMaster instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsCountryMaster persistentInstance) {
		log.debug("removing EmsCountryMaster instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsCountryMaster merge(EmsCountryMaster detachedInstance) {
		log.debug("merging EmsCountryMaster instance");
		try {
			EmsCountryMaster result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsCountryMaster findById(Long id) {
		log.debug("getting EmsCountryMaster instance with id: " + id);
		try {
			EmsCountryMaster instance = entityManager.find(
					EmsCountryMaster.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
