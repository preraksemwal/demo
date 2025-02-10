package app.backend.service;

import app.backend.entity.Account;
import app.backend.respository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Optional<Account> findByUserName(String username) {
        return accountRepository.findByUsername(username);
    }

    public void registerAccount(Account account) {
        accountRepository.save(account);
    }
}
