package com.za.ems.app.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.za.ems.app.hibernate.core.model.EmsUserMaster;
import com.za.ems.app.service.EmsUserMasterService;
import com.za.ems.app.transactional.service.EmsUserMasterTransactionalService;

@Service("emsUserMasterService")
public class EmsUserMasterServiceImpl implements EmsUserMasterService {

	@Autowired
	EmsUserMasterTransactionalService emsUserMasterTransactionalService;
	
	@Override
	public List<EmsUserMaster> populateUserList() {
 		return emsUserMasterTransactionalService.populateUserList();
	}

	@Override
	public EmsUserMaster addToEmsUserMaster(EmsUserMaster emsUserMaster) {
 		return emsUserMasterTransactionalService.addToEmsUserMaster(emsUserMaster);
	}

}
