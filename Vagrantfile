# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # Base box for the VM
  config.vm.box = "ubuntu/focal64"

  config.vm.define "dbserver" do |dbserver|
    dbserver.vm.hostname = "dbserver"
    # Note that the IP address is different from that of the webserver
    # above: it is important that no two VMs attempt to use the same
    # IP address on the private_network.
    dbserver.vm.network "private_network", ip: "192.168.56.12"
    dbserver.vm.synced_folder ".", "/vagrant", owner: "vagrant", group: "vagrant", mount_options: ["dmode=775,fmode=777"]
    
    dbserver.vm.provision "shell", path: "build-dbserver-vm.sh"
  end
end
