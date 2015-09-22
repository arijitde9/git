package com.ems.app.files;

// Generated Sep 22, 2015 3:02:16 AM by Hibernate Tools 3.4.0.CR1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * EmsLeaveType generated by hbm2java
 */
@Entity
@Table(name = "ems_leave_type", catalog = "ems")
public class EmsLeaveType implements java.io.Serializable {

	private Long id;
	private EmsUserMaster emsUserMasterByCreatedBy;
	private EmsUserMaster emsUserMasterByModifiedBy;
	private String leaveDesc;
	private Long leaveCount;
	private Date createdDt;
	private Date modifiedDt;
	private Set emsUserAttendances = new HashSet(0);
	private Set emsUserLeaveDetailses = new HashSet(0);

	public EmsLeaveType() {
	}

	public EmsLeaveType(EmsUserMaster emsUserMasterByCreatedBy,
			EmsUserMaster emsUserMasterByModifiedBy, String leaveDesc,
			Long leaveCount, Date createdDt, Date modifiedDt,
			Set emsUserAttendances, Set emsUserLeaveDetailses) {
		this.emsUserMasterByCreatedBy = emsUserMasterByCreatedBy;
		this.emsUserMasterByModifiedBy = emsUserMasterByModifiedBy;
		this.leaveDesc = leaveDesc;
		this.leaveCount = leaveCount;
		this.createdDt = createdDt;
		this.modifiedDt = modifiedDt;
		this.emsUserAttendances = emsUserAttendances;
		this.emsUserLeaveDetailses = emsUserLeaveDetailses;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "ID", unique = true, nullable = false)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "CREATED_BY")
	public EmsUserMaster getEmsUserMasterByCreatedBy() {
		return this.emsUserMasterByCreatedBy;
	}

	public void setEmsUserMasterByCreatedBy(
			EmsUserMaster emsUserMasterByCreatedBy) {
		this.emsUserMasterByCreatedBy = emsUserMasterByCreatedBy;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MODIFIED_BY")
	public EmsUserMaster getEmsUserMasterByModifiedBy() {
		return this.emsUserMasterByModifiedBy;
	}

	public void setEmsUserMasterByModifiedBy(
			EmsUserMaster emsUserMasterByModifiedBy) {
		this.emsUserMasterByModifiedBy = emsUserMasterByModifiedBy;
	}

	@Column(name = "LEAVE_DESC", length = 50)
	public String getLeaveDesc() {
		return this.leaveDesc;
	}

	public void setLeaveDesc(String leaveDesc) {
		this.leaveDesc = leaveDesc;
	}

	@Column(name = "LEAVE_COUNT")
	public Long getLeaveCount() {
		return this.leaveCount;
	}

	public void setLeaveCount(Long leaveCount) {
		this.leaveCount = leaveCount;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CREATED_DT", length = 0)
	public Date getCreatedDt() {
		return this.createdDt;
	}

	public void setCreatedDt(Date createdDt) {
		this.createdDt = createdDt;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "MODIFIED_DT", length = 0)
	public Date getModifiedDt() {
		return this.modifiedDt;
	}

	public void setModifiedDt(Date modifiedDt) {
		this.modifiedDt = modifiedDt;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsLeaveType")
	public Set getEmsUserAttendances() {
		return this.emsUserAttendances;
	}

	public void setEmsUserAttendances(Set emsUserAttendances) {
		this.emsUserAttendances = emsUserAttendances;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsLeaveType")
	public Set getEmsUserLeaveDetailses() {
		return this.emsUserLeaveDetailses;
	}

	public void setEmsUserLeaveDetailses(Set emsUserLeaveDetailses) {
		this.emsUserLeaveDetailses = emsUserLeaveDetailses;
	}

}
