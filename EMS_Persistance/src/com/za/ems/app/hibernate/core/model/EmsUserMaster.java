package com.za.ems.app.hibernate.core.model;

// Generated Sep 22, 2015 3:02:16 AM by Hibernate Tools 3.4.0.CR1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * EmsUserMaster generated by hbm2java
 */
@Entity
@Table(name = "ems_user_master", catalog = "ems")
public class EmsUserMaster implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2191898260070649655L;
	private Long id;
	private EmsStateMaster emsStateMasterBySrState;
	private EmsCountryMaster emsCountryMasterBySrCountry;
	private EmsStateMaster emsStateMasterByPrState;
	private EmsCountryMaster emsCountryMasterByPrCountry;
	private String empCode;
	private String firstName;
	private String middleName;
	private String lastName;
	private Date dob;
	private Date dateOfJoining;
	private String prAddrLine1;
	private String prAddrLine2;
	private String prPo;
	private String prPs;
	private String prCity;
	private Long prPin;
	private String srAddrLine1;
	private String srAddrLine2;
	private String srPo;
	private String srPs;
	private String srCity;
	private Long srPin;
	private String contactNo1;
	private String contactNo2;
	private String bloodGrp;
	private String email1;
	private String email2;
	private String emergencyContact1;
	private String emergencyContact2;
	private String uploadedPic;
	private String isActive;
	private Set<EmsUserLogin> emsUserLogins = new HashSet<EmsUserLogin>(0);
	private Set<EmsUserDesig> emsUserDesigsForSupEmpId = new HashSet<EmsUserDesig>(0);
	private Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForCreatedBy = new HashSet<EmsUserLeaveDetails>(0);
	private Set<EmsLeaveType> emsLeaveTypesForModifiedBy = new HashSet<EmsLeaveType>(0);
	private Set<EmsUserAttnDetails> emsUserAttnDetailsesForCreatedBy = new HashSet<EmsUserAttnDetails>(0);
	private Set<EmsUserDesig> emsUserDesigsForManagerEmpId = new HashSet<EmsUserDesig>(0);
	private Set<EmsUserAttendance> emsUserAttendancesForEmpId = new HashSet<EmsUserAttendance>(0);
	private Set<EmsUserDesig> emsUserDesigsForHrEmpId = new HashSet<EmsUserDesig>(0);
	private Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForEmpId = new HashSet<EmsUserLeaveDetails>(0);
	private Set<EmsUserAttendance> emsUserAttendancesForModifiedBy = new HashSet<EmsUserAttendance>(0);
	private Set<EmsLeaveType> emsLeaveTypesForCreatedBy = new HashSet<EmsLeaveType>(0);
	private Set<EmsUserAttendance> emsUserAttendancesForCreatedBy = new HashSet<EmsUserAttendance>(0);
	private Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForModifiedBy = new HashSet<EmsUserLeaveDetails>(0);
	private Set<EmsUserDesig> emsUserDesigsForEmpId = new HashSet<EmsUserDesig>(0);
	private Set<EmsUserPwd> emsUserPwds = new HashSet<EmsUserPwd>(0);
	private Set<EmsUserAttnDetails> emsUserAttnDetailsesForEmpId = new HashSet<EmsUserAttnDetails>(0);

	public EmsUserMaster() {
	}

	public EmsUserMaster(String empCode, String firstName) {
		this.empCode = empCode;
		this.firstName = firstName;
	}
 

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID", unique = true, nullable = false)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SR_STATE")
	public EmsStateMaster getEmsStateMasterBySrState() {
		return this.emsStateMasterBySrState;
	}

	public void setEmsStateMasterBySrState(
			EmsStateMaster emsStateMasterBySrState) {
		this.emsStateMasterBySrState = emsStateMasterBySrState;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "SR_COUNTRY")
	public EmsCountryMaster getEmsCountryMasterBySrCountry() {
		return this.emsCountryMasterBySrCountry;
	}

	public void setEmsCountryMasterBySrCountry(
			EmsCountryMaster emsCountryMasterBySrCountry) {
		this.emsCountryMasterBySrCountry = emsCountryMasterBySrCountry;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PR_STATE")
	public EmsStateMaster getEmsStateMasterByPrState() {
		return this.emsStateMasterByPrState;
	}

	public void setEmsStateMasterByPrState(
			EmsStateMaster emsStateMasterByPrState) {
		this.emsStateMasterByPrState = emsStateMasterByPrState;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "PR_COUNTRY")
	public EmsCountryMaster getEmsCountryMasterByPrCountry() {
		return this.emsCountryMasterByPrCountry;
	}

	public void setEmsCountryMasterByPrCountry(
			EmsCountryMaster emsCountryMasterByPrCountry) {
		this.emsCountryMasterByPrCountry = emsCountryMasterByPrCountry;
	}

	@Column(name = "EMP_CODE", nullable = false, length = 20)
	public String getEmpCode() {
		return this.empCode;
	}

	public void setEmpCode(String empCode) {
		this.empCode = empCode;
	}

	@Column(name = "FIRST_NAME", nullable = false, length = 50)
	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "MIDDLE_NAME", length = 50)
	public String getMiddleName() {
		return this.middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	@Column(name = "LAST_NAME", length = 50)
	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DOB", length = 0)
	public Date getDob() {
		return this.dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "DATE_OF_JOINING", length = 0)
	public Date getDateOfJoining() {
		return this.dateOfJoining;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	@Column(name = "PR_ADDR_LINE_1", length = 500)
	public String getPrAddrLine1() {
		return this.prAddrLine1;
	}

	public void setPrAddrLine1(String prAddrLine1) {
		this.prAddrLine1 = prAddrLine1;
	}

	@Column(name = "PR_ADDR_LINE_2", length = 500)
	public String getPrAddrLine2() {
		return this.prAddrLine2;
	}

	public void setPrAddrLine2(String prAddrLine2) {
		this.prAddrLine2 = prAddrLine2;
	}

	@Column(name = "PR_PO", length = 50)
	public String getPrPo() {
		return this.prPo;
	}

	public void setPrPo(String prPo) {
		this.prPo = prPo;
	}

	@Column(name = "PR_PS", length = 50)
	public String getPrPs() {
		return this.prPs;
	}

	public void setPrPs(String prPs) {
		this.prPs = prPs;
	}

	@Column(name = "PR_CITY", length = 50)
	public String getPrCity() {
		return this.prCity;
	}

	public void setPrCity(String prCity) {
		this.prCity = prCity;
	}

	@Column(name = "PR_PIN")
	public Long getPrPin() {
		return this.prPin;
	}

	public void setPrPin(Long prPin) {
		this.prPin = prPin;
	}

	@Column(name = "SR_ADDR_LINE_1", length = 500)
	public String getSrAddrLine1() {
		return this.srAddrLine1;
	}

	public void setSrAddrLine1(String srAddrLine1) {
		this.srAddrLine1 = srAddrLine1;
	}

	@Column(name = "SR_ADDR_LINE_2", length = 500)
	public String getSrAddrLine2() {
		return this.srAddrLine2;
	}

	public void setSrAddrLine2(String srAddrLine2) {
		this.srAddrLine2 = srAddrLine2;
	}

	@Column(name = "SR_PO", length = 50)
	public String getSrPo() {
		return this.srPo;
	}

	public void setSrPo(String srPo) {
		this.srPo = srPo;
	}

	@Column(name = "SR_PS", length = 50)
	public String getSrPs() {
		return this.srPs;
	}

	public void setSrPs(String srPs) {
		this.srPs = srPs;
	}

	@Column(name = "SR_CITY", length = 50)
	public String getSrCity() {
		return this.srCity;
	}

	public void setSrCity(String srCity) {
		this.srCity = srCity;
	}

	@Column(name = "SR_PIN")
	public Long getSrPin() {
		return this.srPin;
	}

	public void setSrPin(Long srPin) {
		this.srPin = srPin;
	}

	@Column(name = "CONTACT_NO_1", length = 20)
	public String getContactNo1() {
		return this.contactNo1;
	}

	public void setContactNo1(String contactNo1) {
		this.contactNo1 = contactNo1;
	}

	@Column(name = "CONTACT_NO_2", length = 20)
	public String getContactNo2() {
		return this.contactNo2;
	}

	public void setContactNo2(String contactNo2) {
		this.contactNo2 = contactNo2;
	}

	@Column(name = "BLOOD_GRP", length = 5)
	public String getBloodGrp() {
		return this.bloodGrp;
	}

	public void setBloodGrp(String bloodGrp) {
		this.bloodGrp = bloodGrp;
	}

	@Column(name = "EMAIL_1", length = 30)
	public String getEmail1() {
		return this.email1;
	}

	public void setEmail1(String email1) {
		this.email1 = email1;
	}

	@Column(name = "EMAIL_2", length = 30)
	public String getEmail2() {
		return this.email2;
	}

	public void setEmail2(String email2) {
		this.email2 = email2;
	}

	@Column(name = "EMERGENCY_CONTACT_1", length = 20)
	public String getEmergencyContact1() {
		return this.emergencyContact1;
	}

	public void setEmergencyContact1(String emergencyContact1) {
		this.emergencyContact1 = emergencyContact1;
	}

	@Column(name = "EMERGENCY_CONTACT_2", length = 20)
	public String getEmergencyContact2() {
		return this.emergencyContact2;
	}

	public void setEmergencyContact2(String emergencyContact2) {
		this.emergencyContact2 = emergencyContact2;
	}

	@Column(name = "UPLOADED_PIC", length = 50)
	public String getUploadedPic() {
		return this.uploadedPic;
	}

	public void setUploadedPic(String uploadedPic) {
		this.uploadedPic = uploadedPic;
	}

	@Column(name = "IS_ACTIVE", length = 1)
	public String getIsActive() {
		return this.isActive;
	}

	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMaster")
	public Set<EmsUserLogin> getEmsUserLogins() {
		return this.emsUserLogins;
	}

	public void setEmsUserLogins(Set<EmsUserLogin> emsUserLogins) {
		this.emsUserLogins = emsUserLogins;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterBySupEmpId")
	public Set<EmsUserDesig> getEmsUserDesigsForSupEmpId() {
		return this.emsUserDesigsForSupEmpId;
	}

	public void setEmsUserDesigsForSupEmpId(Set<EmsUserDesig> emsUserDesigsForSupEmpId) {
		this.emsUserDesigsForSupEmpId = emsUserDesigsForSupEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByCreatedBy")
	public Set<EmsUserLeaveDetails> getEmsUserLeaveDetailsesForCreatedBy() {
		return this.emsUserLeaveDetailsesForCreatedBy;
	}

	public void setEmsUserLeaveDetailsesForCreatedBy(
			Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForCreatedBy) {
		this.emsUserLeaveDetailsesForCreatedBy = emsUserLeaveDetailsesForCreatedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByModifiedBy")
	public Set<EmsLeaveType> getEmsLeaveTypesForModifiedBy() {
		return this.emsLeaveTypesForModifiedBy;
	}

	public void setEmsLeaveTypesForModifiedBy(Set<EmsLeaveType> emsLeaveTypesForModifiedBy) {
		this.emsLeaveTypesForModifiedBy = emsLeaveTypesForModifiedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByCreatedBy")
	public Set<EmsUserAttnDetails> getEmsUserAttnDetailsesForCreatedBy() {
		return this.emsUserAttnDetailsesForCreatedBy;
	}

	public void setEmsUserAttnDetailsesForCreatedBy(
			Set<EmsUserAttnDetails> emsUserAttnDetailsesForCreatedBy) {
		this.emsUserAttnDetailsesForCreatedBy = emsUserAttnDetailsesForCreatedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByManagerEmpId")
	public Set<EmsUserDesig> getEmsUserDesigsForManagerEmpId() {
		return this.emsUserDesigsForManagerEmpId;
	}

	public void setEmsUserDesigsForManagerEmpId(Set<EmsUserDesig> emsUserDesigsForManagerEmpId) {
		this.emsUserDesigsForManagerEmpId = emsUserDesigsForManagerEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByEmpId")
	public Set<EmsUserAttendance> getEmsUserAttendancesForEmpId() {
		return this.emsUserAttendancesForEmpId;
	}

	public void setEmsUserAttendancesForEmpId(Set<EmsUserAttendance> emsUserAttendancesForEmpId) {
		this.emsUserAttendancesForEmpId = emsUserAttendancesForEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByHrEmpId")
	public Set<EmsUserDesig> getEmsUserDesigsForHrEmpId() {
		return this.emsUserDesigsForHrEmpId;
	}

	public void setEmsUserDesigsForHrEmpId(Set<EmsUserDesig> emsUserDesigsForHrEmpId) {
		this.emsUserDesigsForHrEmpId = emsUserDesigsForHrEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByEmpId")
	public Set<EmsUserLeaveDetails> getEmsUserLeaveDetailsesForEmpId() {
		return this.emsUserLeaveDetailsesForEmpId;
	}

	public void setEmsUserLeaveDetailsesForEmpId(
			Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForEmpId) {
		this.emsUserLeaveDetailsesForEmpId = emsUserLeaveDetailsesForEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByModifiedBy")
	public Set<EmsUserAttendance> getEmsUserAttendancesForModifiedBy() {
		return this.emsUserAttendancesForModifiedBy;
	}

	public void setEmsUserAttendancesForModifiedBy(
			Set<EmsUserAttendance> emsUserAttendancesForModifiedBy) {
		this.emsUserAttendancesForModifiedBy = emsUserAttendancesForModifiedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByCreatedBy")
	public Set<EmsLeaveType> getEmsLeaveTypesForCreatedBy() {
		return this.emsLeaveTypesForCreatedBy;
	}

	public void setEmsLeaveTypesForCreatedBy(Set<EmsLeaveType> emsLeaveTypesForCreatedBy) {
		this.emsLeaveTypesForCreatedBy = emsLeaveTypesForCreatedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByCreatedBy")
	public Set<EmsUserAttendance> getEmsUserAttendancesForCreatedBy() {
		return this.emsUserAttendancesForCreatedBy;
	}

	public void setEmsUserAttendancesForCreatedBy(
			Set<EmsUserAttendance> emsUserAttendancesForCreatedBy) {
		this.emsUserAttendancesForCreatedBy = emsUserAttendancesForCreatedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByModifiedBy")
	public Set<EmsUserLeaveDetails> getEmsUserLeaveDetailsesForModifiedBy() {
		return this.emsUserLeaveDetailsesForModifiedBy;
	}

	public void setEmsUserLeaveDetailsesForModifiedBy(
			Set<EmsUserLeaveDetails> emsUserLeaveDetailsesForModifiedBy) {
		this.emsUserLeaveDetailsesForModifiedBy = emsUserLeaveDetailsesForModifiedBy;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByEmpId")
	public Set<EmsUserDesig> getEmsUserDesigsForEmpId() {
		return this.emsUserDesigsForEmpId;
	}

	public void setEmsUserDesigsForEmpId(Set<EmsUserDesig> emsUserDesigsForEmpId) {
		this.emsUserDesigsForEmpId = emsUserDesigsForEmpId;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMaster")
	public Set<EmsUserPwd> getEmsUserPwds() {
		return this.emsUserPwds;
	}

	public void setEmsUserPwds(Set<EmsUserPwd> emsUserPwds) {
		this.emsUserPwds = emsUserPwds;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "emsUserMasterByEmpId")
	public Set<EmsUserAttnDetails> getEmsUserAttnDetailsesForEmpId() {
		return this.emsUserAttnDetailsesForEmpId;
	}

	public void setEmsUserAttnDetailsesForEmpId(Set<EmsUserAttnDetails> emsUserAttnDetailsesForEmpId) {
		this.emsUserAttnDetailsesForEmpId = emsUserAttnDetailsesForEmpId;
	}

}
