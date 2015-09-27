package com.za.ems.app.service;

import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.za.ems.app.hibernate.core.model.EmsUserMaster;

public interface EmsUserMasterService {
	public List<EmsUserMaster> populateUserList();
	public EmsUserMaster addToEmsUserMaster(EmsUserMaster emsUserMaster);
}
