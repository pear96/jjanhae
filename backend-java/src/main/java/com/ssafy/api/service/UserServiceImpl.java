package com.ssafy.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.api.request.UserRegisterPostReq;
import com.ssafy.db.entity.User;
import com.ssafy.db.repository.UserRepository;
import com.ssafy.db.repository.UserRepositorySupport;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 구현 정의.
 */
@Service("userService")
public class UserServiceImpl implements UserService {
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	UserRepositorySupport userRepositorySupport;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Override
	public User createUser(UserRegisterPostReq userRegisterInfo) {
		User user = new User();
		user.setUserId(userRegisterInfo.getUserId());
		// 보안을 위해서 유저 패스워드 암호화 하여 디비에 저장.
		user.setPassword(passwordEncoder.encode(userRegisterInfo.getPassword()));
		user.setAuthCode(userRegisterInfo.getAuthCode());
		user.setBirthday(userRegisterInfo.getBirthday());
		user.setAuthYn(userRegisterInfo.getAuthYn());
		user.setDrink(userRegisterInfo.getDrink());
		user.setDelYn(userRegisterInfo.getDelYn());
		user.setDrinkLimit(userRegisterInfo.getDrinkLimit());
		user.setEmail(userRegisterInfo.getEmail());
		user.setImageUrl(userRegisterInfo.getImageUrl());
		user.setName(userRegisterInfo.getName());
		user.setProvider(userRegisterInfo.getProvider());
		return userRepository.save(user);
	}

	@Override
	public User getUserByUserId(String userId) {
		// 디비에 유저 정보 조회 (userId 를 통한 조회).
		User user = userRepositorySupport.findUserByUserId(userId).get();
		return user;
	}
<<<<<<< Updated upstream:backend-java/src/main/java/com/ssafy/api/service/UserServiceImpl.java
=======

	// 이메일 중복 확인


	// 회원 수정
	@Override
	@Transactional
	public String update(String userId, UserInfoPostReq userInfoPostReq) {
		User user = userRepositorySupport.findUserByUserId(userId).orElseThrow(
				() -> new NullPointerException("수정해야 할 회원이 존재하지 않습니다.")
		);
//		user.update(userInfoPostReq);
		return userId;
	}

	// 회원 탈퇴
	@Override
	@Transactional
	public void delete(String userId) {
		User user = userRepositorySupport.findUserByUserId(userId).orElseThrow(
				() -> new NullPointerException("삭제해야 할 회원이 존재하지 않습니다.")
		);
		userRepositorySupport.deleteByUserId(userId);
	}

>>>>>>> Stashed changes:backend/src/main/java/com/ssafy/api/service/UserServiceImpl.java
}
