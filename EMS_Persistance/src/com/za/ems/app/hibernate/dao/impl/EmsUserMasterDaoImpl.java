package com.za.ems.app.hibernate.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.za.ems.app.hibernate.core.model.EmsUserMaster;
import com.za.ems.app.hibernate.dao.EmsUserMasterDao;

@Repository("emsUserMasterDao")
public class EmsUserMasterDaoImpl implements EmsUserMasterDao {

	@Autowired
 	SessionFactory sessionFactory;

	@Override
	public List<EmsUserMaster> populateUserList() {
		return sessionFactory.getCurrentSession()
				.createQuery("from EmsUserMaster").list();
	}

	@Override
	public EmsUserMaster addToEmsUserMaster(EmsUserMaster emsUserMaster) {
		return (EmsUserMaster) sessionFactory.getCurrentSession()
				.saveOrUpdateCopy(emsUserMaster);
	}

}
