package com.za.ems.app.hibernate.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.za.ems.app.hibernate.core.model.EmsUserMaster;

public interface EmsUserMasterDao {

	public List<EmsUserMaster> populateUserList();
	public EmsUserMaster addToEmsUserMaster(EmsUserMaster emsUserMaster);
}
