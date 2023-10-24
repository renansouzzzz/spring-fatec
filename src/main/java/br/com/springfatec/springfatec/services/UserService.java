package br.com.springfatec.springfatec.services;

import br.com.springfatec.springfatec.models.User;
import br.com.springfatec.springfatec.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;
import java.util.UUID;


@Service
public class UserService {

    private final UserRepository repository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository repository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.repository = repository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    public User create(User user) {

        User userCreate = new User();

        userCreate.setName(user.getName());
        userCreate.setEmail(user.getEmail());
        userCreate.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userCreate.setJobRole(user.getJobRole());

        repository.save(userCreate);
        return userCreate;
    }

    public User update(User user, Long id) {

        try {
            User userUpdate = repository.findById(id).get();

            userUpdate.setName(user.getName());
            userUpdate.setEmail(user.getEmail());
            userUpdate.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userUpdate.setJobRole(user.getJobRole());

            repository.save(userUpdate);

            return userUpdate;
        }

        catch (Exception ex) {
            ex.getMessage();
        }
        return new User();
    }

    public List<User> getAll() {
        List<User> userGetAll = repository.findAll();

        return userGetAll;
    }

    public User getById(Long id) {

        User getById = repository.getReferenceById(id);
        return getById;
    }
}