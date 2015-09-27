package com.za.ems.app.transactional.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.za.ems.app.hibernate.core.model.EmsUserMaster;
import com.za.ems.app.hibernate.dao.EmsUserMasterDao;

@Component("emsUserMasterTransactionalService")
@Transactional(propagation = Propagation.REQUIRED, readOnly = true)
public class EmsUserMasterTransactionalService {

	@Autowired
 	EmsUserMasterDao emsUserMasterDao;
	
	public List<EmsUserMaster> populateUserList() {
 		return emsUserMasterDao.populateUserList();
	}

	@Transactional(propagation = Propagation.REQUIRED, readOnly = false)
 	public EmsUserMaster addToEmsUserMaster(EmsUserMaster emsUserMaster) {
 		return emsUserMasterDao.addToEmsUserMaster(emsUserMaster);
	}
}
