package com.ems.app.files;

// Generated Sep 22, 2015 3:02:17 AM by Hibernate Tools 3.4.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class EmsMasterKey.
 * @see com.ems.app.files.EmsMasterKey
 * @author Hibernate Tools
 */
@Stateless
public class EmsMasterKeyHome {

	private static final Log log = LogFactory.getLog(EmsMasterKeyHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(EmsMasterKey transientInstance) {
		log.debug("persisting EmsMasterKey instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(EmsMasterKey persistentInstance) {
		log.debug("removing EmsMasterKey instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public EmsMasterKey merge(EmsMasterKey detachedInstance) {
		log.debug("merging EmsMasterKey instance");
		try {
			EmsMasterKey result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public EmsMasterKey findById(long id) {
		log.debug("getting EmsMasterKey instance with id: " + id);
		try {
			EmsMasterKey instance = entityManager.find(EmsMasterKey.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
